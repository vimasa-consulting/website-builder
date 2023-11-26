import { mdiDelete } from '@mdi/js';
import Icon from '@mdi/react';
import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';
import { useMemo, useState } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import { deleteLocalData, getAllLocalData, ObjectStores } from '../../../modules/localDb';
import { useAppEditorStore, useTransitionEnd } from '../../../store/appEditorStore';
import { useI18nStore } from '../../../store/I18nStore';
import { useModalStore } from '../../../store/modalStore';
import { cx } from '../../../utils/makeCls';
import { ProjectData, ProjectItem } from '../../../utils/types';
import Button from '../../Button';
import ButtonWithTooltip from '../../Button/ButtonWithTooltip';
import Card from '../../Card';
import Grid from '../../Grid';
import GridItem from '../../GridItem';
import InputField from '../../InputField';
import Popover from '../../Popover';
import PopoverConfirm from '../../Popover/PopoverConfirm';
import Spinner from '../../Spinner';
import Tabs, { TabOption } from '../../Tabs';
import wireframeProject from './templates/wireframe.json';
import landingProject from './templates/landing.json';
import { cl, fx, icon } from '../../theme';

enum ProjectSource {
  Existent = 'existent',
  Templates = 'templates',
}

export const blankWebProject = {
  id: 'blankWebProject',
  name: 'Blank',
  data: {
    pages: [
      {
        name: 'Home',
      }
    ],
  },
};

export const landingPageProject: ProjectItem = {
  id: 'landingProject',
  name: 'Landing Page',
  data: landingProject as ProjectData,
};

const dataTemplates: ProjectItem[] = [
  blankWebProject,
  {
    id: 'wireframe',
    name: 'Wireframe',
    data: wireframeProject,
  },
  landingPageProject,
].map(project => ({
  ...project,
  isTemplate: true,
}));

const getTemplates = () => new Promise<ProjectItem[]>(res => {
  setTimeout(() => res(dataTemplates), 100)
});

export const loadAvailableProjects = () => new Promise<ProjectItem[]>(async res => {
  const projectsColl = await getAllLocalData(ObjectStores.Projects);
  const projects: ProjectItem[] = projectsColl.map(({ key, data }) => ({
    id: `${key}`,
    name: `${data.custom?.projectName || key }`,
    data,
  }));
  res(projects);
});

const removeExistant = (id: string) => deleteLocalData(ObjectStores.Projects, id);

export interface ProjectCardProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onSelect'> {
  project: ProjectItem;
  onSelect?: (project: ProjectItem) => void;
  onRemove?: (project: ProjectItem) => void;
};

const projectsHtml: Record<string, string> = {};

const mountPreview = async ({ html = '', el }: { html: string, el: HTMLElement }) => {
  const content = html;
  const result = {};

  if (document.body.attachShadow!) {
      const shadow = el.shadowRoot || el.attachShadow({ mode: 'open' }); // Allows JS access inside
      shadow.innerHTML = content;
  }

  return result;
}

export const ProjectCard = observer(function ProjectCard({ project, onSelect, onRemove, className }: ProjectCardProps) {
  const i18nStore = useI18nStore();
  const editor = useAppEditorStore().editor!;
  const [projectName, setProjectName] = useState('');
  const previewRef = useRef<HTMLDivElement>(null);
  const plhProjectName = i18nStore.t('projectManager.projectName');
  const handleSelect = () => {
    !project.isTemplate && onSelect?.(project);
  }

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    project.data.custom = {
      ...project.data.custom,
      projectName,
    };
    onSelect?.(project);
  }

  useEffect(() => {
    if (previewRef.current && editor) {
      const htmlKey = `${project.isTemplate ? 't-' : ''}${project.id}`;
      let html = projectsHtml[htmlKey];

      if (!html) {
        const editorShallow = editor.getModel().shallow;
        editorShallow.config.protectedCss = `
          * { box-sizing: border-box; }
          [data-body] {
            margin: 0;
            background-color: white;
            width: 100%;
            height: 100%;
            color: initial;
            font-family: initial;
            font-weight: initial;
            line-height: initial;
          }
          [data-body]:before {
            content: "";
            display: block;
            height: 0px;
            overflow: hidden;
          }
        `;
        editorShallow.loadData(project.data);
        html = editorShallow.getHtml() + `<style>${editorShallow.getCss()}</style>`;
        html = html.replace('<body', '<div data-body').replace('</body>', '</div>');
        projectsHtml[project.id] = html;
      }

      const el = previewRef.current;
      mountPreview({ el, html });
    }
  }, [previewRef, editor, project.data]);

  const selectButton = (
    <Button className="text-sm" size="m2" variant="pr" onClick={handleSelect}>
        {i18nStore.t('select')}
    </Button>
  )

  return (
      <Card padding={false} className={cx('overflow-hidden max-w-full group', className)}>
          <Grid col>
              <GridItem className={cx('relative group h-[150px] bg-checker max-w-full')}>
                  <div className="relative h-full overflow-hidden">
                    <div className="w-[1200px] scale-[0.232] h-[200vh] origin-top-left" ref={previewRef}/>
                  </div>
                  <Grid
                      justify="center"
                      items="center"
                      className={cx(fx.coverAbs, cl.bgH75, 'group-hover:opacity-100 opacity-0 transition-opacity')}
                  >
                      {
                        !project.isTemplate ?
                        selectButton
                        : (
                          <Popover overlay title={false} buttonAs="span" handler={selectButton}>
                            {({ close }) => (
                              <form onSubmit={handleSubmit}>
                                <Grid space="m" col>
                                    <GridItem>
                                        <InputField size="s" value={projectName} onChange={setProjectName} placeholder={plhProjectName} required/>
                                    </GridItem>
                                    <GridItem>
                                        <Button type="submit" variant="pr" size="m2" full>
                                          {i18nStore.t('load')}
                                        </Button>
                                    </GridItem>
                                </Grid>
                              </form>
                            )}
                        </Popover>
                        )
                      }
                  </Grid>
              </GridItem>
              <Grid className="p-1 max-w-full" col space="s">
                <GridItem className={cx(fx.txtEllips, 'text-sm max-w-full')}>
                    { project.name }
                </GridItem>
                <Grid items="center">
                    <GridItem className="mr-auto">
                        {i18nStore.t('projectManager.pages')}: {project.data.pages.length}
                    </GridItem>
                    {
                      !project.isTemplate &&
                      <PopoverConfirm onConfirm={() => onRemove?.(project)}>
                        <ButtonWithTooltip title={i18nStore.t('delete')}>
                            <Icon path={mdiDelete} size={icon.sx}/>
                        </ButtonWithTooltip>
                    </PopoverConfirm>
                    }
                </Grid>
              </Grid>
          </Grid>
      </Card>
  )
});

export default observer(function ProjectManager() {
  const [existent, setExistent] = useState<ProjectItem[]>();
  const [templates, setTemplates] = useState<ProjectItem[]>();
  const [source, setSource] = useState(ProjectSource.Existent);
  const projects = source === ProjectSource.Existent ? existent : templates;
  const appEditorStore = useAppEditorStore();
  const i18nStore = useI18nStore();
  const modalStore = useModalStore();
  const [tid] = useTransitionEnd();
  const t = (key: string) => i18nStore.t(`projectManager.${key}`);

  const onSelect = (project: ProjectItem) => {
    appEditorStore.setProject(project);
    modalStore.close();
  };

  const onRemove = async (project: ProjectItem) => {
    await removeExistant(project.id);
    setExistent(undefined);
  };

  const tabs: TabOption<ProjectSource>[] = useMemo(() => [
    {
      id: ProjectSource.Existent,
      label: t('existentProjects'),
    },
    {
      id: ProjectSource.Templates,
      label: t('templates'),
    },
  ], [i18nStore]);

  useEffect(() => {
    const load = async () => {
      if (source === ProjectSource.Existent && !existent) {
        const data = await loadAvailableProjects();
        setExistent(data);
      } else if (source === ProjectSource.Templates && !templates) {
        const data = await getTemplates();
        setTemplates(data);
      }
    };
    load();
  }, [source, existent, templates])

  return (
    <Grid col full space="m">
      <GridItem>
        <Tabs<ProjectSource> tabs={tabs} onChange={setSource}/>
      </GridItem>
      <GridItem grow>
          {
            !projects ? <Spinner/>
            :
            (
              !projects.length ?
                <Grid justify="center">
                  {t('notFound')}
                </Grid>
              :
              <VirtuosoGrid
                key={tid}
                data={projects}
                listClassName="grid grid-cols-3 gap-2 pr-2"
                itemContent={(i, project) => (
                    <ProjectCard key={project.id} project={project} onSelect={onSelect} onRemove={onRemove}/>
                )}
            />
            )
          }
      </GridItem>
    </Grid>
  );
});

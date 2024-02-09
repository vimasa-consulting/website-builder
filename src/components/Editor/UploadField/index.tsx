import Button, { ButtonProps } from "../Button";
import { observer } from "mobx-react-lite";
import { useI18nStore } from "../../store/I18nStore";
import { useRef } from "react";

export interface UploadFieldProps extends Omit<ButtonProps, 'onChange'> {
  multiple?: boolean
  accept?: string
  onChange?: React.ButtonHTMLAttributes<HTMLInputElement>["onChange"],
  handleUpload: any
};

export default observer(function UploadField({ children, accept, onChange, handleUpload, multiple = true, ...rest }: UploadFieldProps) {
    const i18nStore = useI18nStore();
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
      console.log('clicked')
      inputRef.current?.click()
    };

    return (
      <>
        <input className="hidden" ref={inputRef} type="file" multiple={multiple} accept={accept} onChange={onChange}/>
        <Button className="flex flex-col justify-center border-none outline-none w-full items-center h-[140px] border-bottom-dashed-grey" onClick={handleClick}>
          { children || i18nStore.t('upload') }
        </Button>
      </>
    );
  });
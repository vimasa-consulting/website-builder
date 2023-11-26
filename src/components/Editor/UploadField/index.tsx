import Button, { ButtonProps } from "../Button";
import { observer } from "mobx-react-lite";
import { useI18nStore } from "../../store/I18nStore";
import { useRef } from "react";

export interface UploadFieldProps extends Omit<ButtonProps, 'onChange'> {
  multiple?: boolean
  accept?: string
  onChange?: React.ButtonHTMLAttributes<HTMLInputElement>["onChange"],
};

export default observer(function UploadField({ children, accept, onChange, multiple = true, ...rest }: UploadFieldProps) {
    const i18nStore = useI18nStore();
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = () => inputRef.current?.click();

    return (
      <>
        <input className="hidden" ref={inputRef} type="file" multiple={multiple} accept={accept} onChange={onChange}/>
        <Button variant="pr" size="m2" {...rest} onClick={handleClick}>
          { children || i18nStore.t('upload') }
        </Button>
      </>
    );
  });
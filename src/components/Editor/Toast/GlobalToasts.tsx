import { observer } from 'mobx-react-lite';
import { ToastContainer } from '.';
import { useToastStore } from '../../store/ToastStore';

export default observer(function GlobalToasts() {
  const toastStore = useToastStore();

  return (
    <ToastContainer
        className="fixed top-5 right-5 z-20"
        toasts={toastStore.toasts}
        onDismiss={toastStore.remove}
    />
  );
});

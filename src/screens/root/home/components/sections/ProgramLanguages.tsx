import { NotepadText } from 'lucide-react-native/icons';

import Chip from '@/components/ui/Chip';
import Caption from './Caption';

const ProgramLanguages = () => {
  return (
    <Caption icon={NotepadText} title="Programming Languages">
      <Chip label="TypeScript" color="#2f74c0" icon="TS" />
      <Chip label="JavaScript" color="#f7df1e" icon="JS" />
      <Chip label="Python" color="#009688" icon="PY" />
      <Chip label="Dart" color="#00b4ab" icon="D" />
      <Chip label="Java (core)" color="#e86f00" icon="J" />
    </Caption>
  );
};

export default ProgramLanguages;

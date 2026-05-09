import { Globe } from 'lucide-react-native/icons';

import Chip from '@/components/ui/Chip';
import Caption from './Caption';

const LanguagesSection = () => {
  return (
    <Caption icon={Globe} title="Languages">
      <Chip label="Ukrainian: Native" color="#f7d000" icon="UA" />
      <Chip
        style={{ label: { color: '#fff' } }}
        label="English: B2+"
        color="#2f74c0"
        icon="EN"
      />
      <Chip label="Italian: A1" color="rgb(30, 170, 42)" icon="IT" />
    </Caption>
  );
};

export default LanguagesSection;

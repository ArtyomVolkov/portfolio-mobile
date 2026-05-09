import { StyleSheet, TouchableOpacity } from 'react-native';
import { Contact } from 'lucide-react-native/icons';

import Chip from '@/components/ui/Chip';
import Caption from './Caption';
import AsyncImage from '@/components/ui/AsyncImage';

const SocialItems = [
  {
    label: '#LeetCode',
    color: '#f79800',
    icon: 'https://assets.leetcode.com/static_assets/public/icons/favicon.ico',
  },
  {
    label: '#HackerRank',
    color: '#4ac02f',
    icon: 'https://www.hackerrank.com/favicon.ico',
  },
  {
    label: '#Codewars',
    color: '#f7632e',
    icon: 'https://www.codewars.com/favicon.ico',
  },
  {
    label: '#LinkedIn',
    color: '#0077B5',
  },
  {
    label: '#Github',
    color: '#333',
  },
  {
    label: '#Email',
    color: '#303030',
    icon: 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico',
  },
];

const SocialAndContactsSection = () => {
  return (
    <Caption icon={Contact} title="Social and Contacts">
      {SocialItems.map(item => (
        <TouchableOpacity key={item.label}>
          <Chip
            label={item.label}
            color={item.color}
            style={{
              label: styles.label,
            }}
            icon={
              item.icon && <AsyncImage uri={item.icon} style={styles.image} />
            }
          />
        </TouchableOpacity>
      ))}
    </Caption>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#fff',
  },
  image: {
    width: 24,
    height: 24,
    borderRadius: 4,
  },
});

export default SocialAndContactsSection;

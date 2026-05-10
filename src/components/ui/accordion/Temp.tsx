import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Animated, {
  LinearTransition,
  FadeInDown,
  FadeOut,
} from 'react-native-reanimated';
import Typography from '../Typography';

const damping = 60;
const entering = FadeInDown.springify().damping(damping);
const exiting = FadeOut.springify().damping(damping);
const layout = LinearTransition.springify().damping(damping);

const TempAccordion = () => {
  const [listedItems, setListedItems] = useState<string[]>([]);

  const handleAddItem = () => {
    const newItem = `Item ${Math.floor(Math.random() * 1000)}`;
    setListedItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {listedItems.map(item => (
          <Animated.View
            key={item}
            style={styles.listItem}
            entering={entering}
            exiting={exiting}
            layout={layout}
          >
            <Typography>{item}</Typography>
            <TouchableOpacity
              onPress={() =>
                setListedItems(prevItems => prevItems.filter(i => i !== item))
              }
            >
              <Typography size="md">X</Typography>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
      <TouchableOpacity onPress={handleAddItem} style={styles.addMore}>
        <Typography size="md">Add more</Typography>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  body: {
    gap: 12,
  },
  listItem: {
    gap: 8,
    borderRadius: 8,
    backgroundColor: '#323232',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  addMore: {
    marginVertical: 12,
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default TempAccordion;

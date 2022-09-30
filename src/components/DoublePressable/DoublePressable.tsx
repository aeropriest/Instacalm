import {ReactNode} from 'react';
import {Pressable, Text} from 'react-native';
interface IDoublePressable {
  onDoublePress?: () => void;
  children: ReactNode;
}

export default function DoublePressable({
  onDoublePress = () => {},
  children,
}: IDoublePressable) {
  let lastPress = 0;
  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastPress < 300) {
      onDoublePress();
    }
    lastPress = now;
  };

  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
}

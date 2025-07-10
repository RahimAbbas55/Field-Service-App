// components/ServiceCard.tsx
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { GlobalColors } from '../../constants/GlobalColors';
import { Ionicons } from '@expo/vector-icons';
import { useRef, useEffect } from 'react';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 16px margin on each side + 16px gap between cards

type Props = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  onPress: () => void;
};

export default function ServiceCard({ title, icon, color, onPress }: Props) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0.8,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <TouchableOpacity 
      style={styles.cardContainer}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
    >
      <Animated.View 
        style={[
          styles.card,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          }
        ]}
      >
        <View style={[styles.iconContainer, { backgroundColor: color + '15' }]}>
          <Ionicons name={icon} size={32} color={color} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.arrowContainer}>
          <Ionicons name="arrow-forward" size={16} color={GlobalColors.textSecondary} />
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: cardWidth,
    marginBottom: 8,
  },
  card: {
    backgroundColor: GlobalColors.cardBackground,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 140,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: GlobalColors.border,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    color: GlobalColors.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 20,
  },
  arrowContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: GlobalColors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
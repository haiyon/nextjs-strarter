import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
/**
 * 将多个类合并为一个字符串，使用 tailwind-merge 进行合并
 * @param inputs - 类值
 * @returns {string} 合并后的类字符串
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * 从已知的颜色中随机一个
 * @returns {string} 颜色名称.
 */
export async function randomColor() {
  // ref: tailwindcss colors
  // import colors from 'tailwindcss/colors';
  const colors: string[] = [
    'amber',
    'blue',
    'cyan',
    'emerald',
    'fuchsia',
    'gray',
    'green',
    'indigo',
    'lime',
    'neutral',
    'orange',
    'pink',
    'purple',
    'red',
    'rose',
    'sky',
    'slate',
    'stone',
    'teal',
    'violet',
    'yellow',
    'zinc'
  ];
  const randomIndex: number = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

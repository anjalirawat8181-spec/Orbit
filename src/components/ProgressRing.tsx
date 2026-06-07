import { motion } from 'framer-motion';

interface ProgressRingProps {
  value: number;
  max: number;
  size?: number;
  color?: string;
  label: string;
}

export const ProgressRing = ({
  value,
  max,
  size = 96,
  color = '#7c3aed',
  label,
}: ProgressRingProps) => {
  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(value / max, 1);
  const offset = circumference * (1 - pct);
  const cx = size / 2;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Track ring */}
        <circle
          cx={cx}
          cy={cx}
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={6}
        />
        {/* Progress ring */}
        <motion.circle
          cx={cx}
          cy={cx}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={6}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: 'easeOut' }}
          strokeLinecap="round"
        />
        {/* Value text */}
        <text
          x={cx}
          y={cx}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-xs font-bold fill-gray-900"
          transform={`rotate(90 ${cx} ${cx})`}
        >
          {value}
        </text>
      </svg>
      <p className="text-sm font-medium text-gray-600">{label}</p>
    </div>
  );
};

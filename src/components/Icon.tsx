import {
  Calendar,
  Globe,
  MapPin,
  Cpu,
  Radio,
  Brain,
  Wifi,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  calendar: Calendar,
  globe: Globe,
  "map-pin": MapPin,
  cpu: Cpu,
  radio: Radio,
  brain: Brain,
  wifi: Wifi,
  shield: ShieldCheck,
};

export default function Icon({
  name,
  ...props
}: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = map[name] ?? Calendar;
  return <Cmp {...props} />;
}

import { entities, type EntityType } from '../config/entities';

export function Badge({ type }: { type: EntityType | 'admin' }) {
  const entity =
    type === 'admin'
      ? { label: 'Admin', background: 'bg-blue-700' }
      : entities[type];
  return (
    <span
      className={`rounded-full ${entity.background} px-4 py-1 text-[12px] font-bold ${type === 'admin' ? 'text-canvas' : 'text-black'} border-black border-2 font-mono tracking-widest`}
    >
      {entity.label.toUpperCase()}
    </span>
  );
}

import { entities, type EntityType } from '../config/entities';
import { IconButton } from './buttons/icon-button';
import { Badge } from './badge';

type EntityCardProps = {
  type: EntityType;
  title: string;
  meta: string;
  onEdit?: () => void;
  onDelete?: () => void;
};

export function EntityCard({
  type,
  title,
  meta,
  onEdit,
  onDelete,
}: EntityCardProps) {
  return (
    <article className="relative overflow-hidden rounded-xl border-2 border-ink bg-white p-6 shadow-hard hover:translate-y-1 transition-all">
      <div
        aria-hidden="true"
        className={`${entities[type].background} pointer-events-none absolute -top-10 -right-10 size-20 rotate-45 border-b-2 border-ink`}
      />
      <div className="border-b-2 border-gray-300 pb-2">
        <Badge type={type} />
        <div className="mt-4">
          <h3 className="text-[24px]">{title}</h3>
          <p>{meta}</p>
        </div>
      </div>
      <div className="flex justify-end gap-2 pt-4">
        <IconButton
          action="edit"
          aria-label={`Bewerk ${title}`}
          onClick={onEdit}
          disabled={!onEdit}
        />
        <IconButton
          action="delete"
          aria-label={`Verwijder ${title}`}
          onClick={onDelete}
          disabled={!onDelete}
          title={!onDelete ? 'Verwijderen is nog niet beschikbaar' : undefined}
        />
      </div>
    </article>
  );
}

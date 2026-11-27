import { NavLink } from "react-router-dom";
import { entities, type EntityType } from "../../config/entities";

export function Tab({ entity }: { entity: EntityType }) {
    const { path, label, background, fill, icon: Icon } = entities[entity];

    return (
        <NavLink
            to={path}
            className={({ isActive }) => `
                rounded-full flex items-center border-2
                gap-2 text-base px-4 py-1
                hover:shadow-hard-sm transition-all
                ${isActive ? background + " shadow-hard-sm" : ""}
            `}
        >
            {({ isActive }) => (
                <>
                    <Icon
                        size={16}
                        aria-hidden="true"
                        className={isActive ? "fill-canvas" : fill}
                    />
                    {label}
                </>
            )}
        </NavLink>
    );
}
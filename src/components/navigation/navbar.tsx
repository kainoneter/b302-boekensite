import { Tab } from "./tab";

export function Navbar(){
    return (
        <nav
            className="flex flex-wrap items-center gap-4"
        >
            <Tab entity="book"></Tab>
            <Tab entity="author"></Tab>
            <Tab entity="genre"></Tab>
        </nav>
    );
}
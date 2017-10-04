
import { Person } from "../../model/Person";

export class DB {
    private students: { [snn: string]: Person } = {
        "444-44-4444": new Person("444-44-4444", "Alonzo", "Church"),
        "444444444": new Person("444-44-4444", "Alonzo", "Church")
    };

    find(snn: string) {
        return this.students[snn];
    }
}

export const db = new DB();
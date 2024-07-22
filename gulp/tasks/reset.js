import { deleteAsync } from "del";

export const reset = () => {
    return deleteAsync(app.paths.clean);
};
import { createStandardAction } from "typesafe-actions";
import { Tag } from "../interfaces/tag";

export const navigate = createStandardAction('router/NAVIGATE')<Tag|string>();

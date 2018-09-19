export interface ITodoItem {
  readonly id: Uuid;
  readonly text: string;
  readonly isCompleted: boolean;
}

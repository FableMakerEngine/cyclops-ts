import ItemBase from '../gameObject/ItemBase';

export default class Inventory {
  private inventory: Record<string, ItemBase>;

  constructor() {
    this.inventory = {};
  }

  public addItem(id: number) {
    this.inventory = {};
  }
}

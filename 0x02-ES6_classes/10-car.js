export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
     * Return a new object of the class Car
     */
  cloneCar() {
    const NewCar = this.constructor;
    return new NewCar();
  }
}

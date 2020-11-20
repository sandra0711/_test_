const { Box } = require('../Box.js');
const { ShippingContainer } = require('../ShippingContainer.js');

describe('ShippingContainer', () => {
  let boxes = [];
  let shippingContainer;
  beforeEach(() => {
    boxes = [new Box({ weight: 300 }), new Box({ weight: 100 })];
    shippingContainer = new ShippingContainer({
      destination: 'Hawaii',
      boxes,
      maxWeight: 500,
      maxBoxes: 10,
    });
  });

  describe('👇Тесты на наличие атрибутов класса `ShippingContainer`', () => {
    it('У `ShippingContainer` есть атрибут destination', () => {
      expect(shippingContainer.destination).toEqual('Hawaii');
    });

    it('У `ShippingContainer` есть атрибут maxWeight', () => {
      expect(shippingContainer.maxWeight).toEqual(500);
    });

    it('У `ShippingContainer` есть атрибут maxBoxes', () => {
      expect(shippingContainer.maxBoxes).toEqual(10);
    });

    it('У `ShippingContainer` есть атрибут boxes', () => {
      expect(shippingContainer.boxes).toEqual(boxes);
    });

    describe('👇Тесты на проверку заменяемы ли значения вашего `ShippingContainer`', () => {
      beforeEach(() => {
        shippingContainer.maxWeight = 800;
      });
      it('атрибут maxWeight у ShippingContainer меняется', () => {
        expect(shippingContainer.maxWeight).toEqual(800);
      });
    });
  });

  // =========
  // PENDING смотри Release 1 в README.md
  // =========

  xdescribe('👇Тесты на работу с атрибутом boxes у `ShippingContainer`', () => {
    describe('📦метод класса currentWeight у `ShippingContainer`', () => {
      describe('когда ShippingContainer пустой', () => {
        let emptyShippingContainer;
        beforeEach(() => {
          emptyShippingContainer = new ShippingContainer({
            destination: 'Borneo',
            boxes: [],
            maxBoxes: 10,
            maxWeight: 500,
          });
        });

        it('метод класса currentWeight возвращает 0', () => {
          expect(emptyShippingContainer.currentWeight()).toEqual(0);
        });
      });

      describe('когда в `ShippingContainer` есть boxes', () => {
        it('метод класса currentWeight возвращает общий вес всех boxes ', () => {
          expect(shippingContainer.currentWeight()).toEqual(400);
        });
      });
    });

    describe('📦метод класса  boxesCount у `ShippingContainer`', () => {
      it(' возвращает количество boxes которые есть у `ShippingContainer`', () => {
        expect(shippingContainer.boxesCount()).toEqual(2);
      });
    });

    describe('📦метод класса  addBox у `ShippingContainer` ', () => {
      let newBox;
      beforeEach(() => {
        newBox = new Box({ weight: 50 });
      });

      describe(' в пределах maxWeight можно добавить коробку в boxes', () => {
        it('метод addBox возвращает true в случае если коробка добавлена ', () => {
          expect(shippingContainer.addBox(newBox)).toEqual(true);
        });

        it('и добавляет коробку в атрибут boxes у ShippingContainer`', () => {
          shippingContainer.addBox(newBox);
          expect(shippingContainer.boxes).toContain(newBox);
        });
      });

      describe('когда превышено значение атрибута maxWeight (т.е. когда превышен максимальны вес, с учетом добавления новой коробки)', () => {
        let smallerShippingContainer;
        beforeEach(() => {
          smallerShippingContainer = new ShippingContainer({
            destination: 'Guangzhou',
            boxes,
            maxWeight: 425,
            maxBoxes: 10,
          });
        });
        it('возвращает false', () => {
          expect(smallerShippingContainer.addBox(newBox)).toEqual(false);
        });
      });

      describe('когда превышено значение атрибута maxBoxes(т.е. когда превышено максимальное количество коробок)', () => {
        let fullShippingContainer;
        beforeEach(() => {
          fullShippingContainer = new ShippingContainer({
            destination: 'Corpus Christi',
            boxes,
            maxWeight: 500,
            maxBoxes: 2,
          });
        });
        it('возвращает false', () => {
          expect(fullShippingContainer.addBox(newBox)).toEqual(false);
        });

        it('и не добавляет коробку в `ShippingContainer`', () => {
          fullShippingContainer.addBox(newBox);
          expect(fullShippingContainer.boxes).not.toContain(newBox);
        });
      });
    });
  });
});

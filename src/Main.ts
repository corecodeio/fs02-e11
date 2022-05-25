import Runnable from './interfaces/Runnable';

/**
 * ---------------
 *  ELECTROTIENDA
 * ---------------
 *
 * 1. Cada dispositivo tiene que tener un id
 * 2. Mi tienda tiene 3 diferentes dispositivos
 *  2.1 Iphone
 *  2.2 Kindle
 *  2.3 Tablet
 *
 * 3. Un Iphone:
 *  3.1 Sonido
 *  3.2 LLamadas
 *  3.3 Touch
 * 4. Un Kindle:
 *  4.1 Touch
 * 5. Una Tablet:
 *  5.2 Sonido
 *  5.1 Touch
 *
 * Propiedades
 * --------------------
 * 1. Sonido
 *  - Attr: Volumen
 *  - Meth: Play() ---> Playing a song...
 *
 * 2. Touch
 *  - Attr: X,Y
 *  - Meth: Tap()  ---> Tap detected in x,y
 *
 * 3. Llamada
 *  - Attr: numero
 *  - Meth: Call() ---> Calling from number
 *
 */

export default class Main implements Runnable {
  start() {
    // generar lista (quemada)
    // mostart lista (quemado)
    // const stock: string[] = ['iphone', 'kindle'];
  }
}

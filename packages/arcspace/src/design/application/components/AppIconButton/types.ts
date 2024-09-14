export interface AppIconButtonProps {

  /**
   * @type {string}
   * @description The html type of button element
   */

  htmlType?: HTMLButtonElement['type']

  /**
   * @type {string}
   * @description The type type of button element based on design
   */

  type?: 'fill' | 'outline'

  /**
   *  @type {object}
   *  @description The state of button element
   */

  state?: Partial<Record<'disabled' | 'loading', boolean>>

  /**
   *  @type {string}
   *  @description The shape of button element
   */

  shape?: 'circle' | 'square'

  /**
   *  @type {number}
   *  @description The width of button element
   */

  width: number
}

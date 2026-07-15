export interface AppButtonProps {

  /**
   * @type {string}
   * @description The html type of button element
   */

  htmlType?: HTMLButtonElement['type']

  /**
   * @type {string}
   * @description The design type of button element
   */

  type?: 'fill' | 'outline'

  /**
   * @type {object}
   * @description The state of button element
   */

  state?: Partial<Record<'disabled' | 'loading', boolean>>

  /**
   * @type {string}
   * @description The position of icon element
   */

  iconPosition?: 'left' | 'right' | 'both'

  /**
   * @type {string}
   * @description The width of icon element
   */

  width?: 'auto' | 'max'
}

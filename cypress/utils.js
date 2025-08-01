import Swal from '../src/sweetalert2'
import { isVisible } from '../src/utils/dom'

export { default as Swal } from '../src/sweetalert2'

export const $ = document.querySelector.bind(document)

export const isHidden = (elem) => !isVisible(elem)

export const TIMEOUT = 10

export const SwalWithoutAnimation = Swal.mixin({ animation: false })

export const dispatchCustomEvent = (elem, eventName, eventDetail = {}) => {
  const event = new CustomEvent(eventName, {
    bubbles: true,
    cancelable: true,
    detail: eventDetail,
  })
  elem.dispatchEvent(event)
}

export const dispatchMouseEvent = (elem, eventName, eventDetail = {}) => {
  const event = new MouseEvent(eventName, {
    bubbles: true,
    cancelable: true,
    ...eventDetail,
  })
  elem.dispatchEvent(event)
}

export const dispatchTouchEvent = (elem, eventName, touchDetail = {}) => {
  const touch = new Touch({
    identifier: JSON.stringify(touchDetail),
    target: elem,
    ...touchDetail,
  })

  const event = new TouchEvent(eventName, {
    bubbles: true,
    cancelable: true,
    touches: [touch],
  })
  elem.dispatchEvent(event)
}

export const triggerKeydownEvent = (target, key, params = {}) => {
  const event = document.createEvent('HTMLEvents')
  event.key = key
  event.initEvent(
    'keydown',
    true, // bubbles
    true // cancelable
  )
  for (const param in params) {
    event[param] = params[param]
  }
  target.dispatchEvent(event)
  return event
}

export const ensureClosed = () => {
  SwalWithoutAnimation.fire()
  SwalWithoutAnimation.close()
}

import makeWASocket from './Socket'

export * from '../WAProto'
export * from './Utils'
export * from './Types'
export * from './Store'
export * from './Defaults'
export * from './WABinary'
export * from './WAM'
export * from './WAUSync'

const makeAPIWa = makeWASocket

export type WASocket = ReturnType<typeof makeAPIWa>
export { makeAPIWa }
export default makeAPIWa

import moment from 'moment'

import 'moment/locale/es'

moment.locale('es')

export default (ctx, inject) => {
  ctx.$moment = moment
  inject('moment', moment)
}

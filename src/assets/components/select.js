import React from 'react'

import Radio from '@material-ui/core/Radio'
import { withStyles } from '@material-ui/core/styles'
import style from '../css/select'

export default withStyles(style)(props => <Radio color="default" {...props} />)

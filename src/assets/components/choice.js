import React from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/core/styles'
import style from '../css/choice'

export default withStyles(style)(props => <FormControlLabel style={style} {...props} />)

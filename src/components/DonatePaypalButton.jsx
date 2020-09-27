import React from 'react'
import config from '../config/SiteConfig'
import styles from './DonatePaypalButton.module.scss'
import { injectIntl, intlShape } from 'react-intl'
import { FormattedMessage } from 'react-intl'
const locales = config.locales

const DonatePaypalButton = ({intl: { locale }, ...props  }) => {

  return <>
  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className={styles.formPaypal}>
<input type="hidden" name="cmd" value="_donations" />
<input type="hidden" name="business" value="M79C5MZDGP7U8" />
<input type="hidden" name="currency_code" value="EUR" />

<FormattedMessage id="donate">
			    { value => (<input type="submit" value={value} />)
			        
			    }
			    </FormattedMessage>  
<img alt="" border="0" src="https://www.paypal.com/en_FR/i/scr/pixel.gif" width="1" height="1" />
</form>

  		</>
}

export default injectIntl(DonatePaypalButton)
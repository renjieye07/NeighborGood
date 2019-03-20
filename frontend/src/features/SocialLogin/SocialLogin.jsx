import React from 'react'
import {Button, Icon} from 'semantic-ui-react'

const SocialLogin = () => {
    return(
            <div>
              <Button type="button" style={{ marginBottom: '10px' }} fluid color="facebook">
                <Icon name="facebook" /> Login with Facebook
              </Button>
        
              <Button type="button" style={{ marginBottom: '10px' }} fluid color="google plus">
                <Icon name="google plus" />
                Login with Google
              </Button>

              <Button type="button" style={{ marginBottom: '10px' }} fluid color="twitter">
                <Icon name="twitter" />
                Login with Twitter
              </Button>

              <Button type="button" fluid color="linkedin">
                <Icon name="linkedin" />
                Login with Linkedin
              </Button>
            </div>
    )
}

export default SocialLogin
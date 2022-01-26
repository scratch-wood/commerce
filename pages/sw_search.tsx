import type { GetStaticPropsContext } from 'next'
import useCustomer from '@framework/customer/use-customer'
import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ImgUpload, Container } from '@components/ui'

export default function Profile() {
    const { data } = useCustomer()
    return (
      <Container>
        <ImgUpload/>
      </Container>
    )
  }
  
  Profile.Layout = Layout
  
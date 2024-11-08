import 'reflect-metadata'
import app from '@/app'
import { InitMinio } from '@/config/minio'

InitMinio()
app.listen(process.env.PORT || 4000, async () => {
  await InitMinio()
  console.log('Server is running on port 4000')
})

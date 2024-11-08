import * as Minio from 'minio'

export const minioClient = new Minio.Client({
  endPoint: 'localhost',
  port: 9000,
  useSSL: false,
  accessKey: 'AolVheVUPXZTHPEslDSc',
  secretKey: 'lgPMwpKpkzHqDEb7W2f91uAFsuTdYsFAw4B1StT2'
})

export const bucketName = 'images'

export const InitMinio = async () => {
  try {
    const bucketExists = await minioClient.bucketExists(bucketName)
    if (!bucketExists) {
      await minioClient.makeBucket(bucketName, 'us-east-1')
      console.log('Bucket created successfully in "us-east-1".')
    }
  } catch (err) {
    console.error('Error creating bucket:', err)
  }
}

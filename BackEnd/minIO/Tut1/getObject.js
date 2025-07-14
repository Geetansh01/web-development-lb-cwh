import * as Minio from 'minio'

// Make connection to MinIO server
const minioClient = new Minio.Client({
  endPoint: '192.168.1.5',
  port: 9000,
  useSSL: false,
  accessKey: 'minioadmin',
  secretKey: 'minioadmin',
})

// Check Connection
try {
  const buckets = await minioClient.listBuckets()
  console.log('Success', buckets)
} catch (err) {
  console.log(err.message)
}

// Download an object from a bucket
minioClient.fGetObject('dev', 'SampleImage.jpg', './SampleImageFromTheBucket.jpg', function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('success')
})
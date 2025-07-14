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

// Upload an object to a bucket
const file = './SampleImage.jpg' 
const metaData = {
  'Content-Type': 'image/jpeg',
  'Additional-Metadata': 'Geetansh\'s Sample Image',
}
minioClient.fPutObject('dev', 'SampleImage.jpg', file, metaData, function (err, objInfo) {
  if (err) {
    return console.log(err)
  }
  console.log('Success', objInfo.etag, objInfo.versionId)
})
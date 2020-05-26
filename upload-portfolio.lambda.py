import boto3
import io
import zipfile
import mimetypes

## ?? import json

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:221936117795:deployPortfolioTopic')
    try:
        s3 = boto3.resource('s3') ## config=Config(signature_version='s3v4'))
        ## is that s3v4 stuff necessary, i.e., everything after the comma?
        ## --> turns out, I don't think it is . . .

        portfolio_bucket = s3.Bucket('portfolio.conkleserverless.com')
        build_bucket = s3.Bucket('portfoliobuild.conkleserverless.com')

        portfolio_zip = io.BytesIO()
        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm, #was a closed paren before . . .
                    ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
        topic.publish(Message='Portfolio deployed successfully')

    except:
        topic.publish(Message='Portfolio hasn't deployed successfully')
        raise

    return 'Hello from Lambda!'
    

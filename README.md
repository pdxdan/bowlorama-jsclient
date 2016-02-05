# bowlorama-jsclient

Part of the bowlorama demo application. This piece provides a simple Javascript client for updating and displaying
the bowling game state. It is a static site served from an S3 bucket and communicates only with AWS Lambda functions
via AWS API Gateway. 

The other pieces of Bowlorama are in the following repos:
- https://github.com/pdxdan/bowlorama-calculator
- https://github.com/pdxdan/bowlorama-history-tracker

## Usage

To build and run locally you'll need NPM and webpack.

To pack the client simply run 'webpack' at the root of the repo. 

To deploy to an S3 bucket:
- ensure your AWS CLI credentials are setup
- edit the publish-to-s3.sh to refer to a bucket you own
- run the publish-to-s3.sh script

## Testing

To test with local web server run:
npm run dev

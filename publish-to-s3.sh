aws s3 sync ./dist s3://bowlorama.anolik.net \
--region us-west-2 \
--exclude ".git*" \
--exclude "*DS_Store" \
--exclude "LICENSE.txt" \
--exclude "README.txt" \
--exclude "publish-to-s3.sh" \
--delete
# --dryrun

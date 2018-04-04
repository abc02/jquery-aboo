WEB_PATH='/home/jquery-aboo/'
# WEB_PATH_CLIENT='/home/wwwroot/vnshop/client'
WEB_USER='root'
WEB_USERGROUP='root'
# we can do 
echo "Start deployment vx.itnote.cn"
cd $WEB_PATH
echo "pulling source code..."
# git reset --hard origin/release
# git clean -f
# 把项目拉取到最新
git pull
git checkout master
echo "changing permissions..."
# 安装项目依赖
npm install
echo "install dependencies..."
# 切换到client里面
# cd $WEB_PATH_CLIENT
# 把vue项目编译
npm run build
chown -R $WEB_USER:$WEB_USERGROUP $WEB_PATH
echo "Finished."
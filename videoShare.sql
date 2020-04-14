-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.53 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win32
-- HeidiSQL 版本:                  9.5.0.5220
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 videoshare 的数据库结构
CREATE DATABASE IF NOT EXISTS `videoshare` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `videoshare`;

-- 导出  表 videoshare.car 结构
CREATE TABLE IF NOT EXISTS `car` (
  `cId` int(11) NOT NULL AUTO_INCREMENT COMMENT '购物记录id',
  `bookimgUrl` varchar(255) DEFAULT NULL COMMENT '加入购物车的商品地址',
  `userId` int(11) DEFAULT NULL COMMENT '用户id',
  PRIMARY KEY (`cId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='购物车';

-- 正在导出表  videoshare.car 的数据：0 rows
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
/*!40000 ALTER TABLE `car` ENABLE KEYS */;

-- 导出  表 videoshare.goods 结构
CREATE TABLE IF NOT EXISTS `goods` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- 正在导出表  videoshare.goods 的数据：0 rows
/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` (`Id`, `imgurl`, `price`, `title`) VALUES
	(1, '//oss-xpc6.xpccdn.com/xpc-resource-private/5e81954463598.jpg?x-oss-process=image%2Fresize%2Cw_540%2Ch_304%2Cm_fill', 15, ' 浙江-杭州-钱塘江-航拍延时刻'),
	(2, '//oss-xpc6.xpccdn.com/xpc-resource-private/5e819b559abba.jpg?x-oss-process=image%2Fresize%2Cw_540%2Ch_304%2Cm_fill', 30, ' 浙江-杭州-千岛湖'),
	(3, '//oss-xpc6.xpccdn.com/xpc-resource-private/5e818e0c5bef9.jpg?x-oss-process=image%2Fresize%2Cw_540%2Ch_304%2Cm_fill', 12, ' 南京 东水关 秦淮盛境'),
	(4, '//oss-xpc6.xpccdn.com/xpc-resource-private/5e7d4a9636d3c.jpg?x-oss-process=image%2Fresize%2Cw_540%2Ch_304%2Cm_fill', 16, ' 天坛祈年殿');
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;

-- 导出  表 videoshare.useraction 结构
CREATE TABLE IF NOT EXISTS `useraction` (
  `aId` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `comment` varchar(2000) DEFAULT NULL COMMENT '评论',
  `comLikeNum` int(11) DEFAULT NULL COMMENT '评论点赞数量',
  `likeUrl` varchar(255) DEFAULT NULL COMMENT '喜欢视频地址',
  `favoriteUrl` varchar(255) DEFAULT NULL COMMENT '收藏视频地址',
  `userId` int(11) DEFAULT NULL COMMENT '用户id',
  PRIMARY KEY (`aId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='用户行为，喜欢，收藏，评论';

-- 正在导出表  videoshare.useraction 的数据：0 rows
/*!40000 ALTER TABLE `useraction` DISABLE KEYS */;
/*!40000 ALTER TABLE `useraction` ENABLE KEYS */;

-- 导出  表 videoshare.users 结构
CREATE TABLE IF NOT EXISTS `users` (
  `userId` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `userName` varchar(20) DEFAULT NULL COMMENT '用户名',
  `passWord` varchar(32) DEFAULT NULL COMMENT '密码',
  `phone` varchar(18) DEFAULT NULL COMMENT '号码',
  `gender` varchar(3) DEFAULT NULL COMMENT '性别',
  `age` int(3) DEFAULT NULL COMMENT '年龄',
  `address` varchar(50) DEFAULT NULL COMMENT '地址',
  `attentionNum` int(11) DEFAULT NULL COMMENT '关注量',
  `fansNum` int(11) DEFAULT NULL COMMENT '粉丝数量',
  PRIMARY KEY (`userId`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COMMENT='用户表';

-- 正在导出表  videoshare.users 的数据：12 rows
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`userId`, `userName`, `passWord`, `phone`, `gender`, `age`, `address`, `attentionNum`, `fansNum`) VALUES
	(1, 'mws', '123', '4323', '男', 18, '', 0, 0),
	(2, '李荣浩', '123', '', '', 0, '', 3, 99999),
	(3, '蔡徐坤，佟丽娅', '123', '', '', 0, '', 0, 0),
	(4, 'Cellos', '123', '', '', 0, '', 0, 0),
	(5, '李秀英', '123', '', '', 0, '', 0, 0),
	(6, '轩辕剑', '123', '', '', 0, '', 0, 0),
	(7, 'Secrete', '123', '', '', 0, '', 0, 0),
	(8, 'Sunrise', '123', '', '', 0, '', 0, 0),
	(9, '朱兴杰', '123', '', '', 0, '', 0, 0),
	(10, '杞云彩', '1233', '34e3', '', 0, '', 0, 0),
	(11, ' 周瑜', '123', '1234567', NULL, NULL, NULL, NULL, NULL),
	(12, '李白', '123', '777777', NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- 导出  表 videoshare.video 结构
CREATE TABLE IF NOT EXISTS `video` (
  `vId` int(11) NOT NULL AUTO_INCREMENT COMMENT '视频id',
  `vName` varchar(50) NOT NULL COMMENT '视频名称',
  `vUrl` varchar(255) NOT NULL COMMENT '视频地址',
  `vDesc` varchar(1000) NOT NULL COMMENT '视频描述',
  `vMoney` int(11) NOT NULL COMMENT '视频价格',
  `playNum` int(11) NOT NULL COMMENT '播放量',
  `likeNum` int(11) NOT NULL COMMENT '喜欢数量',
  `free` int(2) NOT NULL COMMENT '免费0，收费1',
  `private` int(2) NOT NULL COMMENT '公开0，私密1',
  `userId` int(11) NOT NULL COMMENT '用户id',
  PRIMARY KEY (`vId`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='视频';

-- 正在导出表  videoshare.video 的数据：8 rows
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` (`vId`, `vName`, `vUrl`, `vDesc`, `vMoney`, `playNum`, `likeNum`, `free`, `private`, `userId`) VALUES
	(1, '李荣浩-等着等着就变老了', 'video/lironghao.mp4', '该死的！整整一代人都在给人加油，给人端盘子，做白领奴隶。广告诱导我们追求豪车华服，干我们讨厌的工作，只为能买我们不需要的破烂。我们是被历史遗忘的一代，没有目标、没有地位，我们没有世界大战，没有经济大萧条；我们的大战是心灵之战，我们的大萧条是我们的生活。我们从小看电视，相信有一天，我们能成为百万富翁、电影巨星或是摇滚明星。但我们不会，我们慢慢认识到这个事实，所以我们非常非常气愤', 0, 4545, 3435423, 0, 0, 2),
	(2, '蔡徐坤，佟丽娅-山河无恙在我胸', 'video/video2.mp4', '看樱花似雪，为英雄而歌！ 解“封”春讯到来时，含泪听蔡徐坤佟丽娅原创抗疫公益MV《山河无恙在我胸》 经历了60多个日夜的浴血奋战和坚守，今天，春风里激荡着让全国人民翘首以盼的消息！从3月25日零时起，湖北省除武汉以外地区“解封”，14天后，武汉也将迎来“解封”时刻！ 为了这一刻，无数的逆行英雄热血出征，他们坚定的身影穿过风雨暗夜，汇成守护生命的星河！', 0, 3423434, 6546453, 0, 0, 3),
	(3, 'Cellos-Mombasa', 'video/Cellos.mp4', '该作者太懒，什么都没留下', 0, 36547, 652, 0, 0, 4),
	(4, '李秀英 - 덩그러니(孤零零) ｜ SUGARMAN3 2020／02／28 现场版', 'video/video3.mp4', '该作者太懒，什么都没留下', 0, 7658, 14678, 0, 0, 5),
	(5, '轩辕剑 - 千年醉', 'video/video4.mp4', '《轩辕剑陆 凤凌长空千载云》是大宇资讯DOMO小组在2013年8月所推出之《轩辕剑》单机RPG系列的第11作品。本作以西周初期「周公东征」为背景，描写东方商国的遗民，奋勇抵抗西方周人持续东侵，以及为了复兴故国所做的可歌可泣努力与牺牲。本代故事由吴欣叡、方宁共同编剧，呈现一个与著名《封神榜》全然不同的商、周世界，藉由一位原本养尊处优的年轻贵族，在家亡国灭之后彻然觉醒，在大义与动乱的相激荡中，探讨「文化」超越武力与时代的温柔渗透力；剧情中也出现了古老的身毒（印度）文明、巴蜀古文明，共同交织出一段迷人又绚烂的古老传奇。', 0, 97657, 22677, 0, 0, 6),
	(6, 'Carla\'s Dreams - Secrete', 'video/Secrete.mp4', '该作者太懒，什么都没留下', 0, 2567, 46723, 0, 0, 7),
	(7, '昭宥 - Before Sunrise (Prod. 키겐)', 'video/Sunrise.mp4', '该作者太懒，什么都没留下', 0, 67854, 23536, 0, 0, 8),
	(8, '朱星杰 - 浪漫', 'video/video5.mp4', '浪漫，是人类对于情感最渴望也最传统的定义。 不同的心境、不同的经历、不同的场景，都会有不同的感受。 2020，一个崭新的年头， 我选择用最传统的情歌模式， 不加更多渲染， 用我个人的理解， 来诠释我对“浪漫”的个人能理解。 “浪漫”不只是美满、惊喜、祝福，“分手”也不只是眼泪、伤心、失望。 “浪漫”也可以是——即便分开了，回望过往时，那种遗憾或许也是一种浪漫。', 0, 78352, 642455, 0, 0, 9);
/*!40000 ALTER TABLE `video` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

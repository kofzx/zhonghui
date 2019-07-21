var descList = [
    {
        title: '公司简介',
        desc: '广东众汇医药有限公司（简称：众汇医药）位于我国首批经济特区之一，美丽的海滨邹鲁城市汕头市，坐落于汕头市黄河路19号智汇时代。'
    },
    {
        title: '公司理念',
        desc: '公司秉承用户至上、汇创双赢的服务理念,重品牌,讲信用;坚持以全新经营思路、经营理念和管理模式全力发展医药事业、门店管理，整合优质的医药资源，提供全面、贴心、专业、经济的医药服务，致力于群众用药安全的健康事业。'
    },
    {
        title: '公司业务',
        desc: '众汇医药线上和线下立体化；服务和技术专业化；学习和培训系统化；资质和流程规范化，打造中国最优、最专业的医药保健事业,是您个人创业、门店合作、药店加盟的首选！与众同行,共汇未来！欢迎各界医药同仁加入众汇医药,共同开启美好未来！'
    }
];

function bindNavClick() {
    $(".nav-hook").on('click', '.nav-hook__item', function (e) {
        var $clickTarget = $(e.target),
            clickIndex = $clickTarget.index(),
            activeCLass = 'selected';
        if ($clickTarget.hasClass(activeCLass)) {
            return false;
        }
        $clickTarget.siblings().removeClass(activeCLass);
        $clickTarget.addClass(activeCLass);
        updateDescription(clickIndex);
    });
}

function updateDescription(index) {
    var $title = $("#title"),
        $desc = $("#desc");
    $title.text(descList[index].title);
    $desc.text(descList[index].desc);
}

$(function() {
    bindNavClick();
});
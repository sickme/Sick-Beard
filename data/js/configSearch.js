$(document).ready(function(){
    var loading = '<img src="'+sbRoot+'/images/loading16.gif" height="16" width="16" />';
	
    $.fn.nzb_method_handler = function() {
        
        var selectedProvider = $('#nzb_method :selected').val();

        if (selectedProvider == "blackhole") {
            $('#blackhole_settings').show();
            $('#sabnzbd_settings').hide();
            $('#testSABnzbd').hide();
            $('#testSABnzbd-result').hide();
            $('#nzbget_settings').hide();
        } else if (selectedProvider == "nzbget") {
            $('#blackhole_settings').hide();
            $('#sabnzbd_settings').hide();
            $('#testSABnzbd').hide();
            $('#testSABnzbd-result').hide();
            $('#nzbget_settings').show();
        } else {
            $('#blackhole_settings').hide();
            $('#sabnzbd_settings').show();
            $('#testSABnzbd').show();
            $('#testSABnzbd-result').show();
            $('#nzbget_settings').hide();
        }

    }

    $('#nzb_method').change($(this).nzb_method_handler);

    $(this).nzb_method_handler();

    $('#testSABnzbd').click(function(){
        $('#testSABnzbd-result').html(loading);
        var sab_host = $("input=[name='sab_host']").val();
        var sab_username = $("input=[name='sab_username']").val();
        var sab_password = $("input=[name='sab_password']").val();
        var sab_apiKey = $("input=[name='sab_apikey']").val();
        
        $.get(sbRoot+"/home/testSABnzbd", {'host': sab_host, 'username': sab_username, 'password': sab_password, 'apikey': sab_apiKey}, 
        function (data){ $('#testSABnzbd-result').html(data); });
    });
    
    var onTorrentMethodChange = function() {
    	switch ($('#use_libtorrent :selected').val())
    	{
    	case 'off':	//	blackhole
    		$('#torr_bh_settings').show();
    		$('#libtorrent_settings').hide();
    		break;
    	case 'on':	//	libtorrent (integrated)
    		$('#torr_bh_settings').hide();
    		$('#libtorrent_settings').show();
    		break;
    	}
    }
    $('#use_libtorrent').change(onTorrentMethodChange);
    onTorrentMethodChange();
});

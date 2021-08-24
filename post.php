<?
	if ((isset($_POST['name']) && $_POST['name'] != "") && (isset($_POST['subname']) && $_POST['subname'] != "") && (isset($_POST['email']) && $_POST['email'] != "") && (isset($_POST['message']) && $_POST['message'] != "")) {
		$to = 'muvbed@gmail.com'; 
		$subject = 'muvbed (portfolio)'; 
		$message = '
			<p>Имя: '.$_POST['name'].'</p>
			<p>Фамилия: '.$_POST['subname'].'</p>
			<p>E-mail: '.$_POST['email'].'</p>
			<p>'.$_POST['message'].'</p>';
		$headers  = "Content-type: text/html; charset=utf-8 \r\n";
		$headers .= "From: user@muvbed.zzz.com.ua";
		mail($to, $subject, $message, $headers);
	}
?>

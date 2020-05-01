window.onload = function(){

		var frm = document.querySelector('#frm');
		var inputs = document.querySelectorAll("input");
		
		frm.onsubmit = function(e)
		{
			//alert('OK');
			e.preventDefault();	//기존 기능 막기
			//추가된 사항을 검사
			//alert(frm.agree.checked ==true);
			if(!frm.agree.checked){
				alert('반드시 약관에 동의하세요');
				return;
				}
			//전송		
			frm.submit();
			
		}

	}
/*
* Function uses conditional statements with scripts in quiz header to determine if svg, png or default radio buttons are to be used.
*/
$(document).ready(function() {
    if (IE_pre8) {
        return;
        /* Default radio buttons are used here */
    }
    else if (IE_pre9) {
        $(function() {
            $('input:radio, input:checkbox').screwDefaultButtons({
                image: 'url("includes/images/radioSmall_22_x_22.png")',
                width: 22,
                height: 22
            });
        });
    }
    else {
        $(function() {
            $('input:radio, input:checkbox').screwDefaultButtons({
                image: 'url("includes/images/radioSmall_22_x_22.svg")',
                width: 22,
                height: 22
            });
        });
    }
});
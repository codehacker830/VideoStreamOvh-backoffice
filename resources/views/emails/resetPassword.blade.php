@extends('layouts.email')

@section('custom-css')

@endsection

@section('content')
<p>Hi there,</p>
<p>
    <strong>Please check this button link</strong>, to reset your password. If you received this by mistake or weren't
    expecting it, please disregard this email.
</p>
<table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
    <tbody>
    <tr>
        <td align="left">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                <tr>
                    <td> <a href="{{ url('user/reset_password', $token) }}">Reset Password</a> </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>
<p>Good luck! Hope it works.</p>
@endsection

@section('custom-js')

@endsection

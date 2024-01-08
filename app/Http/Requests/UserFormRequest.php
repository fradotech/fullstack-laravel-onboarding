<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'role_id' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'A name is required!!!',
            'email.required' => 'An email is required!!!',
            'email.email' => 'The email must be a valid email address!!!',
            'email.unique' => 'The email has already been taken!!!',
            'role_id.required' => 'A role id is required!!!',
        ];
    }
}

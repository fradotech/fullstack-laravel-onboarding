<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserFormRequest;
use App\Http\Resources\UserResource;
use App\Http\Services\RoleService;
use App\Http\Services\UserService;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    protected $userService;
    protected $roleService;

    public function __construct(
        UserService $userService,
        RoleService $roleService
    ) {
        $this->userService = $userService;
        $this->roleService = $roleService;
    }

    public function index()
    {
        $data = $this->userService->index();

        return Inertia::render('User/Users', [
            'title' => 'Users',
            'data' => UserResource::collection($data)
        ]);
    }

    public function create()
    {
        return Inertia::render('User/UserForm', [
            'title' => 'Create User',
            'roles' => $this->roleService->index(),
        ]);
    }

    public function store(UserFormRequest $request)
    {
        $this->userService->store($request);
        return redirect()->route('users.index');
    }

    public function edit($id)
    {
        $data = $this->userService->show($id);

        return Inertia::render('User/UserForm', [
            'title' => 'Edit User',
            'data' => new UserResource($data),
            'roles' => $this->roleService->index(),
        ]);
    }

    public function update(UserFormRequest $request, User $user)
    {
        $this->userService->update($request, $user);
        return redirect()->route('users.index');
    }

    public function destroy(User $user)
    {
        $this->userService->destroy($user);
        return redirect()->back();
    }
}

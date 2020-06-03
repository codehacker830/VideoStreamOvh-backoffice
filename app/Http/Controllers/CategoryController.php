<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getCategories() {
        $categories = Category::all();
        return response()->json(['status' => 'success', 'categories' => $categories]);
    }
    public function create(Request $request) {
        $category = Category::create([
            'name' => $request->get('name'),
            'description' => $request->get('description')
        ]);
        return response()->json(['category' => $category]);
    }
    public function update() {

    }
    public function delete(Request $request) {
        $category_id = $request->route('category_id');
        Category::find($category_id)->delete();
        if (Category::find($category_id)) {
            return response()->json(['error' => 'Category instance was not deleted'], 400);
        }
        $categories = Category::all();
        return response()->json(['status' => 'success', 'categories' => $categories]);
    }
}

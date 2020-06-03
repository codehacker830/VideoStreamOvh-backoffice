<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->unsignedBigInteger('category_id')->nullable();
            $table->foreign('category_id')->references('id')->on('categories');
//            $table->foreignId('category_id')->constrained()->onDelete('cascade');
            $table->string('description')->nullable();
            $table->string('cover')->default('https://via.placeholder.com/270x170');
            $table->string('source')->nullable();
            $table->unsignedFloat('rating')->default(5);
            $table->unsignedInteger('price')->nullable();
            $table->unsignedBigInteger('views')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('videos');
    }
}
